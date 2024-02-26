import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    vueJsx(),
    vuetify({
      autoImport: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
  },
  server: {
    port: 3000,
    strictPort: true,
    headers: {
      Connection: 'Keep-Alive'
    },
    https: generateCerts(),
    proxy: checkEnv()
  }
})

function generateCerts() {
  const baseFolder =
    process.env.APPDATA !== undefined && process.env.APPDATA !== ''
      ? `${process.env.APPDATA}/ASP.NET/https`
      : `${process.env.HOME}/.aspnet/https`
  const certificateArg = process.argv
    .map((arg) => arg.match(/--name=(?<value>.+)/i))
    .filter(Boolean)[0]
  const certificateName = certificateArg
    ? certificateArg.groups?.value
    : process.env.npm_package_name

  if (!certificateName) {
    console.error(
      'Invalid certificate name. Run this script in the context of an npm/yarn script or pass --name=<<app>> explicitly.'
    )
    process.exit(-1)
  }

  const certFilePath = path.join(baseFolder, `${certificateName}.pem`)
  const keyFilePath = path.join(baseFolder, `${certificateName}.key`)

  if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
    const outp = execSync(
      'dotnet ' +
        [
          'dev-certs',
          'https',
          '--export-path',
          certFilePath,
          '--format',
          'Pem',
          '--no-password'
        ].join(' ')
    )
    console.log(outp.toString())
  }

  return {
    cert: fs.readFileSync(certFilePath, 'utf8'),
    key: fs.readFileSync(keyFilePath, 'utf8')
  }
}

function checkEnv() {
  if (process.env.NODE_ENV !== 'production') {
    return {
      '/api': {
        changeOrigin: true,
        secure: false,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
        target: 'https://localhost:5001/swagger'
      },
      // proxy API requests to the ASP.NET backend
      '/v1': {
        changeOrigin: true,
        secure: false,
        followRedirects: true,
        rewrite: (path: string) => path.replace(/^\/v1/, ''),
        target: 'https://localhost:5001/v1'
      }
    }
  } else {
    return {
      '/api': {
        changeOrigin: true,
        secure: false,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
        target: 'https://bibliothecamanagerapi.azurewebsites.net/swagger'
      },
      // proxy API requests to the ASP.NET backend
      '/v1': {
        changeOrigin: true,
        secure: false,
        followRedirects: true,
        rewrite: (path: string) => path.replace(/^\/v1/, ''),
        target: 'https://bibliothecamanagerapi.azurewebsites.net/v1'
      }
    }
  }
}
