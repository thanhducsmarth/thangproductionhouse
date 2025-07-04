# Thang Production - Website Chụp Ảnh

Website chuyên nghiệp cho dịch vụ chụp ảnh cưới, thời trang và các dịch vụ nhiếp ảnh khác.

## 🚀 Triển khai lên GitHub Pages

### Bước 1: Tạo Repository trên GitHub

1. Đăng nhập vào GitHub
2. Tạo repository mới với tên `thangproduction`
3. Không khởi tạo với README, .gitignore, hoặc license

### Bước 2: Khởi tạo Git và Push code

```bash
# Khởi tạo Git repository
git init

# Thêm tất cả files
git add .

# Commit đầu tiên
git commit -m "Initial commit"

# Thêm remote origin (thay [your-username] bằng username GitHub của bạn)
git remote add origin https://github.com/[your-username]/thangproduction.git

# Push lên GitHub
git branch -M main
git push -u origin main
```

### Bước 3: Cấu hình GitHub Pages

1. Vào repository trên GitHub
2. Vào Settings > Pages
3. Trong Source, chọn "Deploy from a branch"
4. Chọn branch "main" và folder "/ (root)"
5. Click Save

### Bước 4: Tạo GitHub Actions Workflow

Tạo file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build
        env:
          NODE_ENV: production

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### Bước 5: Cập nhật Settings GitHub Pages

Sau khi workflow chạy thành công:

1. Vào Settings > Pages
2. Thay đổi Source thành "Deploy from a branch"
3. Chọn branch "gh-pages" và folder "/ (root)"
4. Click Save

## 🛠️ Cài đặt và Chạy Local

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Export static files
npm run export
```

## 📁 Cấu trúc Dự án

```
thangproduction/
├── app/                    # Next.js App Router
│   ├── components/         # React components
│   ├── api/               # API routes
│   ├── services/          # Service pages
│   └── ...
├── public/                # Static assets
├── next.config.ts         # Next.js configuration
└── package.json           # Dependencies
```

## 🔧 Cấu hình Môi trường

Tạo file `.env.local` cho development:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

## 📝 Lưu ý

- Website sẽ được deploy tại: `https://[your-username].github.io/thangproduction`
- Đảm bảo cập nhật `homepage` trong `package.json` với username GitHub thực tế
- API routes sẽ không hoạt động trên GitHub Pages (static hosting), cần sử dụng Vercel hoặc Netlify cho backend functionality
  #   t h a n g p r o d u c t i o n 
   
   
#   t h a n g p r o d u c t i o n  
 #   t h a n g p r o d u c t i o n h o u s e  
 