import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Thay thế bằng tài khoản và app password thật của bạn
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD; // 16 ký tự, không dấu cách

console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, service, date } = await req.json();

    // Kiểm tra dữ liệu đầu vào
    if (!name || !email || !phone || !message || !service || !date) {
      return NextResponse.json(
        { message: 'Vui lòng nhập đầy đủ thông tin.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: EMAIL_USER,
      to: 'thanhduckrb767@gmail.com',
      subject: `Yêu cầu tư vấn dịch vụ ${service} từ ${name}`,
      html: `
        <h3>Thông tin khách hàng:</h3>
        <p><strong>Họ tên:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Số điện thoại:</strong> ${phone}</p>
        <p><strong>Ngày chụp dự kiến:</strong> ${date}</p>
        <p><strong>Dịch vụ quan tâm:</strong> ${service}</p>
        <h3>Nội dung tin nhắn:</h3>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Gửi email thành công' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Lỗi gửi email:', error);
    return NextResponse.json(
      { message: error?.message || error?.toString() || 'Có lỗi xảy ra khi gửi email' },
      { status: 500 }
    );
  }
} 