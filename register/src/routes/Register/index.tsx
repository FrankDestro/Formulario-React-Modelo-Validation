import { faSave } from '@fortawesome/free-solid-svg-icons';
import { faBackspace } from '@fortawesome/free-solid-svg-icons/faBackspace';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import FormInput from '../../components/FormComponents/FormInput';
import './styles.css';
import { useState } from 'react';
import * as forms from "../../utils/forms";
import formDataStructure from "../../routes/Register/FormData";
import FormTextArea from '../../components/FormComponents/FormTextArea';

function Register() {

  const [formData, setFormData] = useState(formDataStructure);

  function handleInputChange(event: any) {
    const result = forms.updateAndValidate(formData, event.target.name, event.target.value)
    setFormData(result);
  }

  function handleTurnDirty(name: string) {
    const newFormData = forms.dirtyAndValidate(formData, name);
    setFormData(newFormData);
  }

  return (
    <div>
      <main>
        <section id="register-form-section" className="register-container">
          <div className="register-client-form-container">
            <form className="register-card register-form title-form">
              <div className='register-title'>
                <h2>Registro de Cliente</h2>
              </div>

              <div className="register-form-controls-container">

                <div className="container">

                  <div className="row">
                    <div className='col-sm'>
                      <h3>Nome: </h3>
                      <FormInput
                        {...formData.nome}
                        className="register-form-control"
                        onChange={handleInputChange}
                        onTurnDirty={handleTurnDirty}
                      />
                    </div>
                  </div>


                  <div className="row">
                    <div className='col-sm'>
                      <h3>RG: </h3>
                      <FormInput
                        {...formData.rg}
                        className="register-form-control"
                        onChange={handleInputChange}
                        onTurnDirty={handleTurnDirty}
                      />
                    </div>
                    <div className='col-sm'>
                      <h3>CPF: </h3>
                      <FormInput
                        {...formData.cpf}
                        className="register-form-control"
                        onChange={handleInputChange}
                        onTurnDirty={handleTurnDirty}
                      />
                    </div>
                    <div className='col-sm'>
                      <h3>Data de Nasc: </h3>
                      <FormInput
                        {...formData.birthDate}
                        className="register-form-control"
                        onChange={handleInputChange}
                        onTurnDirty={handleTurnDirty}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className='col-sm'>
                      <h3>Endereço: </h3>
                      <FormInput
                        {...formData.endereco}
                        className="register-form-control"
                        onChange={handleInputChange}
                        onTurnDirty={handleTurnDirty}
                      />
                    </div>
                  </div>


                  <div className="row">
                    <div className='col-sm'>
                      <h3>Cidade: </h3>
                      <FormInput
                        {...formData.cidade}
                        onChange={handleInputChange}
                        onTurnDirty={handleTurnDirty}
                        className="register-form-control"
                      />
                    </div>
                    <div className='col-sm'>
                      <h3>Estado: </h3>
                      <FormInput
                        {...formData.cidade}
                        onChange={handleInputChange}
                        onTurnDirty={handleTurnDirty}
                        className="register-form-control"
                      />
                    </div>
                  </div>


                  <div className="row">
                    <div className='col-sm'>
                      <h3>Telefone: </h3>
                      <FormInput
                        {...formData.telefone}
                        onChange={handleInputChange}
                        onTurnDirty={handleTurnDirty}
                        className="register-form-control"
                      />
                    </div>
                    <div className='col-sm'>
                      <h3>Celular : </h3>
                      <FormInput
                        {...formData.celular}
                        onChange={handleInputChange}
                        onTurnDirty={handleTurnDirty}
                        className="register-form-control"
                      />
                    </div>
                  </div>


                  <div className="row">
                    <div className='col-sm'>
                      <h3>E-mail : </h3>
                      <FormInput
                        {...formData.email}
                        onChange={handleInputChange}
                        onTurnDirty={handleTurnDirty}
                        className="register-form-control"
                      />
                      <div className="register-form-error">{formData.email.message}</div>
                    </div>

                    <div className='col-sm'>
                      <h3>Password : </h3>
                      <FormInput
                        {...formData.password}
                        onChange={handleInputChange}
                        onTurnDirty={handleTurnDirty}
                        className="register-form-control"
                      />
                      <div className="register-form-error">{formData.password.message}</div>
                    </div>
                  </div>

                  <div className="row">
                    <div className='col-sm'>
                      <h3>Profissão </h3>
                      <FormInput
                        {...formData.profissao}
                        onChange={handleInputChange}
                        onTurnDirty={handleTurnDirty}
                        className="register-form-control"
                      />
                      <div className="register-form-error">{formData.profissao.message}</div>
                    </div>
                  </div>

                  <div className="row">
                    <div className='col-sm'>
                      <h3>Descreva suas Habilidades: </h3>
                      <FormTextArea
                        {...formData.habilidades}
                        onChange={handleInputChange}
                        onTurnDirty={handleTurnDirty}
                        className="register-form-control register-textarea"
                      />
                      <div className="register-form-error">{formData.habilidades.message}</div>
                    </div>
                  </div>

                </div>
              </div>


              <div>
                <div className="row container-button">
                  <div className='col-sm'>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      type="submit"
                    >
                      <FontAwesomeIcon
                        icon={faSave}
                        style={{ marginRight: "8px" }}
                      />
                      Cadastrar
                    </Button>

                  </div>

                  <div className='col-sm'>

                    <Button
                      variant="contained"
                      color="error"
                      fullWidth
                      type="submit"
                    >
                      <FontAwesomeIcon
                        icon={faBackspace}
                        style={{ marginRight: "8px" }}
                      />
                      Cancelar
                    </Button>
                  </div>
                </div>
              </div>

            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Register
