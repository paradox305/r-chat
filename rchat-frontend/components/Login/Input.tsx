export default function Input(props: any) {
  let { width, height, type, name, id, value, placeholder, className } = props;
  console.log(width, height, type, name, id, placeholder);
  return (
    <input
      type={`${type}`}
      name={`${name}`}
      id={`${id}`}
      className={`${className}`}
      placeholder={`${placeholder}`}
      onChange={(e) => {
        value(e.target.value);
      }}
    />
  );
}
