import React, { useRef, useState } from 'react';
import { getNewTableData } from '../hook/getNewTableData';
import { FormLeadData, setLeadData } from '../hook/setLeadData';
import { dataContext } from "../context/formContext";
import { Loading } from '../Loading';
import { Error } from './Error';
import styles from './form.css';


function setDisableRefs(ref: React.RefObject<any>, isDisable: boolean): void {
  if (!ref.current) return;
  ref.current.disabled = isDisable;
}


export function Form() {
  const emailRef = useRef<HTMLInputElement>(null);
  const leadCountRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('Неизвезстная ошибка');

  async function submitHendler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsError(false);
    setIsSubmiting(true);
    if (!leadCountRef.current || !emailRef.current || !formRef.current) return
    formRef.current.classList.add(styles.loading_blur);

    setDisableRefs(leadCountRef, isSubmiting);
    setDisableRefs(emailRef, isSubmiting);

    function resetStyleForm() {
      if (!formRef.current) return
      formRef.current.classList.remove(styles.loading_blur);
      setIsSubmiting(false);
      setDisableRefs(leadCountRef, isSubmiting);
      setDisableRefs(emailRef, isSubmiting);
    }
    if (!leadCountRef.current.value || !emailRef.current.value) {
      setIsError(true);
      setError('Заполни поля формы');
      resetStyleForm();
      return;
    }

    if (isNaN(Number(leadCountRef.current.value)) || Number(leadCountRef.current.value) <= 0 ) {
      setIsError(true);
      setError('Некорректное значение лидов');
      resetStyleForm()
      return;
    }

    const dataForm: FormLeadData = {
      leadCount: Number(leadCountRef.current.value),
      email: emailRef.current.value,
      formId: formRef.current.id,
    }

    const res = await setLeadData(dataForm);
    switch(res.status) {
      case 'Err':
      case null: 
        setIsError(true);
        setError(res.result);
      break;
      case 'OK': 
        emailRef.current.value = '';
        leadCountRef.current.value = '';
        setIsError(false);
        setError('');
        console.log(getNewTableData());
      break;
      default: 
        setIsError(false);
    } 

    resetStyleForm();
  }
  return (
    <dataContext.Consumer>
      {(getNewData) => (
          <div className={styles.wrapper}>

          {isSubmiting && <Loading />}

          <form className={styles.form} onSubmit={submitHendler}
            ref={formRef}
            id='form_1'
            autoComplete={"true"}>
            <div className={styles.form_inputbox}>
              <div className={styles.input_group}>
                
                <div className={styles.input_block}>
                  <input type="email" name='leadCount' className={styles.input}
                    placeholder='E-mail' autoComplete='email'
                    ref={emailRef} />
                </div>
                <div className={styles.input_block}>
                  <input type="tel" name='leadCount' autoComplete='none' className={styles.input}
                    placeholder='Кол-во лидов'
                    ref={leadCountRef} />
                </div>
              </div>
              <div className={styles.input_group}>
                <div className={styles.form__submit}>
                  <button type="submit" className={styles.submit}>Отправить</button>
                </div>
              </div>
            </div>

            {isError && <Error text={error}/>} 

          </form>

        </div>
      )}
    
  
    </dataContext.Consumer>
  );
}


