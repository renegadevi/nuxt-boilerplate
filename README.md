# Nuxt Boilerplate

A ready to use Nuxt 3 boilerplate

**Live Demo**: https://nuxt-boilerplate.onrender.com/

**StackBlitz**: https://stackblitz.com/github/renegadevi/nuxt-boilerplate

![screenshot](https://raw.githubusercontent.com/renegadevi/nuxt-boilerplate/main/.github/screenshot.png)
![lighthouse](https://github.com/renegadevi/nuxt-boilerplate/blob/e806bae6efec29a19579d7cf76ef683ffe980917/.github/lighthouse.png)

## Quick setup (TLDR;)

```bash
git clone https://github.com/renegadevi/nuxt-boilerplate.git
cd nuxt-boilerplate
pnpm install
pnpm run dev
```

## Setup

### Prerequisites:

- [pnpm](https://pnpm.io/)
- [mkcert](https://github.com/FiloSottile/mkcert) (Optional localhost HTTPS)

### Clone repo

```bash
git clone https://github.com/renegadevi/nuxt-boilerplate.git
cd nuxt-boilerplate
```

### Install dependencies:

```bash
pnpm install
```

### Optional: `.env`

```ini
VITE_BASE_URL="https://localhost:3000/"
```

### Optional: Generate certificate for HTTPS for localhost

```bash
# mkdir certs
cd certs
mkcert localhost
```

## Start local server

### Start development server

```bash
# HTTP
pnpm run dev
# HTTPS
pnpm run dev-https
```

### Start production build server (HTTP)

```bash
# HTTP
pnpm run build;pnpm run preview
# HTTPS
pnpm run build;pnpm run preview-https
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Nuxt Modules included:

- [eslint](https://nuxt.com/modules/eslint)
- [pinia](https://nuxt.com/modules/pinia)
- [tailwindcss](https://nuxt.com/modules/tailwindcss)
- [i18n](https://nuxt.com/modules/i18n)
- [device](https://nuxt.com/modules/device)
- [devtools](https://nuxt.com/modules/devtools)
- [image](https://nuxt.com/modules/image)
- [google-fonts](https://nuxt.com/modules/google-fonts)
- [color-mode](https://nuxt.com/modules/color-mode)
- [icon](https://nuxt.com/modules/icon)
- [cookie-control](https://nuxt.com/modules/cookie-control)

## Optional: Component Viewer

If you are looking for a component viewer while building and designing components, I made this extension for nuxt. Drop in the `_components.vue` into the `Pages` directory, make sure you have a `blank.vue` in Layouts that's just a `<Slot />`, and go to `/_components`

https://github.com/renegadevi/nuxt-component-viewer

![nuxt-component-viewer](https://raw.githubusercontent.com/renegadevi/nuxt-component-viewer/6ca97e434ccd52d0949712ca39420529d37b3b5b/.github/screenshot-1.png)
