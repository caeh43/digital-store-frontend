const BASE_URL = import.meta.env?.BASE_URL ?? '/';

/** Monta o caminho de um arquivo da pasta public respeitando o `base` do Vite. */
export function publicAsset(fileName) {
  return `${BASE_URL}${fileName}`;
}

export const PLACEHOLDER_SRC = publicAsset('placeholder.svg');

/**
 * Handler de onError para <img>: troca por uma imagem neutra quando o arquivo
 * não existe (por exemplo, se a pasta public ainda não recebeu as imagens
 * oficiais). Evita loop caso o próprio placeholder falhe.
 */
export function handleImageError(event) {
  const img = event.currentTarget;
  if (img.dataset.fallback) return;
  img.dataset.fallback = 'true';
  img.src = PLACEHOLDER_SRC;
}
