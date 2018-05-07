export function previewImage(image: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (isImage(image)) {
      // https://developer.mozilla.org/en-US/docs/Web/API/FileReader
      const fileReader = new FileReader();
      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      // fileReader.onerror = (error) => {
      //   console.log(error);
      // };
      fileReader.readAsDataURL(image);
    } else {
      reject(`Expected an image file. Instead received ${image.type}`);
    }
  });
}

export function isImage(file: File): boolean {
  return /\.(jpe?g|png|gif)$/i.test(file.name);
}
