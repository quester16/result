export const Input = ({ iconUrl, value, onChange, type, name, ...rest }) => {
  return (
    <div style={{ display: "flex" }}>
      <span style={{ padding: 5 }}>
        {iconUrl && (
          <img src={`${iconUrl}`} alt="input icon" width={30} height={30} />
        )}
      </span>
      <input
        style={{ padding: 5 }}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};
