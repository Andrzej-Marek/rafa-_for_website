const express = require("express")
var cors = require("cors")
const nodemailer = require("nodemailer")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

const MAIL_TO = "diseno.5@wp.pl"
app.post("/app/sendmail", async (req, res) => {
  let { email, message } = req.body

  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: "<TYPE_USER_MAIL_HERE>",
      pass: "<TYPE_USER_PASSWORD_HERE>",
    },
  })

  let info = await transporter.sendMail({
    from: `${email}`,
    to: MAIL_TO,
    subject: `Zapytanie od ${email}`,
    html: `<p> Wiadomość od ${email} <br /> <br /> Wiadomość: : <br /> <b> ${message} </b></p>`,
  })

  if (!info)
    return res
      .status(500)
      .json({ msg: "Nie udało się wysłać wiadomości, spróbuj później" })

  return res.status(200).json({ msg: "Pomyślnie wysłano wiadomość" })
})

app.get("/app/test", (req, res) => {
  console.log("HERE")
  res.send("HELLO")
})
const PORT = process.env.PORT || 6000

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
