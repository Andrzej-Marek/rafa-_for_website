import React, { useState } from "react"
import styled from "styled-components"
import { TextField } from "@material-ui/core"
import Axios from "axios"
const ContactForm = () => {
  const [mailForm, setMailForm] = useState({
    email: "",
    massage: "",
  })
  const [loading, setLoading] = useState(false)
  const [mailStatus, setMailStatus] = useState({
    error: null,
    sendSuccess: "",
  })
  const handleSubmit = async e => {
    e.preventDefault()
    const { email, message } = mailForm
    if (!email.trim() || !message.trim()) {
      return setMailStatus({
        ...mailStatus,
        error: "Pola muszą być wypełnione",
      })
    }
    setLoading(true)
    try {
      const response = await Axios.post("/app/sendmail", {
        email,
        message,
      })
      if (response.status !== 200) {
        setMailStatus({
          ...mailStatus,
          error: "Ups, coś poszło nie tak, spróbuj później",
        })
      } else {
        setMailStatus({
          error: null,
          sendSuccess: "Wiadomość wysłana pomyślnie!",
        })
      }
      setLoading(false)
    } catch (error) {
      setMailStatus({
        ...mailStatus,
        error: "Ups, coś poszło nie tak, spróbuj później",
      })
      setLoading(false)
      console.log(error.message)
    }
  }

  const { message, email } = mailForm
  const { error, sendSuccess } = mailStatus
  return (
    <Wrapper>
      <FormWrapper id="contact-form">
        {sendSuccess ? (
          <div
            style={{
              textAlign: "center",
              padding: "40px 0",
              fontWeight: "bold",
            }}
          >
            {sendSuccess}
          </div>
        ) : (
          <>
            <h2>Wyślij nam wiadomość</h2>
            <form noValidate onSubmit={handleSubmit}>
              <TextField
                label="Wpisz swój adres e-mail"
                variant="outlined"
                value={email}
                onChange={e =>
                  setMailForm({ ...mailForm, email: e.target.value })
                }
                required
              />
              <TextField
                label="Twoja wiadomość"
                variant="outlined"
                className="text-area"
                value={message}
                onChange={e =>
                  setMailForm({ ...mailForm, message: e.target.value })
                }
                multiline
                rowsMax="4"
              />
              {loading ? (
                <div style={{ textAlign: "center" }}>Wysyłam wiadomość...</div>
              ) : (
                <CustomButton>Wyślij</CustomButton>
              )}
              {error && (
                <div
                  style={{
                    color: "red",
                    textAlign: "center",
                    padding: "5px 0",
                  }}
                >
                  {error}
                </div>
              )}
            </form>
          </>
        )}
      </FormWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 40px 0;
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
`

const FormWrapper = styled.div`
  h2 {
    margin: 10px 0;
  }
  .MuiFormControl-root {
    width: 100%;
    margin: 10px 0;

    .MuiOutlinedInput-inputMultiline {
      height: 100% !important;
    }
  }

  .MuiOutlinedInput-notchedOutline {
    border: 1px solid ${({ theme }) => theme.color.primary} !important;
  }

  .text-area {
    height: 150px;

    div {
      height: 100%;
    }
  }
`

const CustomButton = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary};
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;

  :hover,
  :active,
  :visited,
  :focus {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.primary};
    box-shadow: none;
    outline: none;
  }
`
export default ContactForm
