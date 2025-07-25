
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Assignment-Angular-1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Assignment-Angular-1"
  },
  {
    "renderMode": 2,
    "route": "/Assignment-Angular-1/about"
  },
  {
    "renderMode": 2,
    "route": "/Assignment-Angular-1/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Assignment-Angular-1/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5377, hash: 'f16e4bc0bc1f7ec50cc234bdb1cba56e6ccb4e84bb1144bf9ec645a3741a8d96', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1019, hash: 'cad0aad318f3adb67386237b5a2d62686c7dca7a3881ff2527cae011165e08b7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 23181, hash: '03dd18583612024a85564e6cf103c46d10d241e8aebbce65c4456161a893659e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 25635, hash: '9b66009f1ced5852150795a4379f21a5ff5df9e179167c4e3d48ea47866a607c', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 23390, hash: '654f1b054bc324b3b1e617573703065819bb0728fc55253236fd3e6d5b46f003', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 28153, hash: 'f231e96506a2b76d998cb8f8496cb589c0372b0795ca2d070ed573a983daf471', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-Y7VYKVKL.css': {size: 304851, hash: 'REHL8Vr1afM', text: () => import('./assets-chunks/styles-Y7VYKVKL_css.mjs').then(m => m.default)}
  },
};
