import { useOpenAPI } from "./hook";

export default function OpenAPIUI() {
  const { imageUrl } = useOpenAPI();

  return <img src={imageUrl} />;
}
