
const formDataStructure = {
  nome: {
    value: "",
    id: "nome",
    name: "nome",
    type: "text",
    placeholder: "Nome",
  },
  rg: {
    value: "",
    id: "rg",
    name: "rg",
    type: "text",
    placeholder: "RG",
    validation : function (value : string) {
      return /^(\d{1,2}\.?)(\d{3}\.?)(\d{3})(\-?[0-9Xx])$/.test(value);
    },
    message : "Favor digitar um RG válido"
  },
  cpf: {
    value: "",
    id: "cpf",
    name: "cpf",
    type: "cpf",
    placeholder: "CPF",
    maxLength : "14",
    validation : function (value : string) {
      return/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/.test(value)
    },
    message : "Cpf invalido, favor entrar com um cpf válido"
  },
  birthDate: {
    value: "",
    id: "birthDate",
    name: "birthDate",
    type: "date",
    placeholder: "Data Nascimento",
  },
  endereco: {
    value: "",
    id: "endereco",
    name: "endereco",
    type: "text",
    placeholder: "Endereço",
  },
  cidade: {
    value: "",
    id: "cidade",
    name: "cidade",
    type: "text",
    placeholder: "Cidade",
  },
  estado: {
    value: "",
    id: "estado",
    name: "estado",
    type: "text",
    placeholder: "Estado",
  },
  telefone: {
    value: "",
    id: "telefone",
    name: "telefone",
    type: "telefone",
    placeholder: "Telefone",
    maxLength : "14",
  },
  celular: {
    value: "",
    id: "celular",
    name: "celular",
    type: "text",
    placeholder: "Celular",
    maxLength : "15",
  },
  email: {
    value: "",
    id: "email",
    name: "email",
    type: "text",
    placeholder: "E-mail",
    validation : function (value: string) {
      return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
    },
    message: "Favor informar um email válido",
  },
  password: {
    value: "",
    id: "password",
    name: "password",
    type: "text",
    placeholder: "Password",
    validation : function (value : string) {
      return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/.test(value);
    },
    message : "A senha deve ter pelo menos um dígito (0-9), um caractere especial (!@#$%^&*) e possuir entre 6 e 20 caracteres"
  },
  profissao: {
    value: "",
    id: "profissao",
    name: "profissao",
    type: "text",
    placeholder: "Profissão",
    validation : function (value : string){
      return /^.{10,100}$/.test(value.toLowerCase())
    },
    message : "Favor acima de 10 caracteres"
  },
  habilidades: {
    value: "",
    id: "habilidades",
    name: "habilidades",
    type: "text",
    placeholder: "Habilidades",
    validation : function (value : string){
      return /^.{15,250}$/.test(value.toLowerCase())
    },
    message : "Favor digite entre 15 e 250 caracteres"
  },
};

export default formDataStructure;