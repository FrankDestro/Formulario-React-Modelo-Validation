
function FormRadio(props: any) {

  const {
    validation,
    invalid = "false",
    dirty = "false",
    onTurnDirty,
    ...radioProps } = props;

  function handleBlur() {
    onTurnDirty(props.name)
  }

  return (
    <input
      {...radioProps}
      data-invalid={invalid}
      onBlur={handleBlur}
      data-dirty={dirty}
    />
  )
}

export default FormRadio


