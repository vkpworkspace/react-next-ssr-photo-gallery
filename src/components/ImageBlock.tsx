interface ImageBlockProps {
  id: number;
  url: string;
}

const ImageBlock = ({ id, url }: ImageBlockProps) => {
  return (
    <div>
      <h2>Id: {id}</h2>
      <p>URL: {url}</p>
    </div>
  );
};

export default ImageBlock;
