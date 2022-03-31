import Image from "next/image";

export default function _Image({ src, alt, ...rest }) {
  return <Image src={src} alt={alt} {...rest} />;
}
