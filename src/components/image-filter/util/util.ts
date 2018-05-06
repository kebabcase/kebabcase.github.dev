export function isImage(file: File): boolean {
  return /\.(jpe?g|png|gif)$/i.test(file.name);
}
