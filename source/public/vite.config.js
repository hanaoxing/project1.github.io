import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    open: true
  },
  build: {
    assetsDir: 'assets',
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name.split('.').pop()
          // 图片文件保持原名和目录结构，不添加hash
          if (/png|jpe?g|gif|tiff|bmp|ico|svg|webp/i.test(ext)) {
            // 保持原始的完整路径
            return assetInfo.name
          }
          return 'assets/[name]-[hash].[ext]'
        }
      }
    }
  },
  // 禁用对字符串中资源路径的处理
  experimental: {
    renderBuiltUrl: (filename, { hostType, hostId, relativePath, importer }) => {
      // 对于public文件夹中的资源，保持原始路径
      if (filename.includes('picture')) {
        return `/${filename}`
      }
      return filename
    }
  }
})
