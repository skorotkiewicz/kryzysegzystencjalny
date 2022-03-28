import { useEffect, useState } from "react"
import { useQuery, useMutation, Link, invoke } from "blitz"
import getQuote from "app/quotes/queries/getQuote"
import calculateSaturday from "app/quotes/mutations/calculateSaturday"
import calculateRemember from "app/quotes/mutations/calculateRemember"
import ProgressBar from "./Progress"

const Main = () => {
  const [quote] = useQuery(getQuote, null)
  const [calculateSaturdayMutation] = useMutation(calculateSaturday)
  const [calculateRememberMutation] = useMutation(calculateRemember)
  const [age, setAge]: any = useState(null)
  const [years, setYears] = useState("")
  const [saturdays, setSaturdays] = useState("")
  const [remember, setRemember] = useState("")
  const [percentage, setPercentage] = useState("")

  const ageHandler = (age: number) => {
    localStorage.setItem("age", String(age))
    setAge(Number(age))
  }

  useEffect(() => {
    const age = localStorage.getItem("age")
    if (age && age?.length > 0) {
      setAge(age)
    }
  }, [])

  return (
    <>
      <div className="urls">
        <Link href="/Features">funkcje</Link>
        <Link href="/Pricing">cennik</Link>
      </div>

      <div className="hey">
        <div
          className="quote"
          onClick={() => {
            invoke(getQuote, null)
          }}
        >
          {quote}
        </div>

        <div className="black">
          <h3>twoje soboty</h3>
          <input
            type="number"
            placeholder="Twój wiek"
            value={age}
            onChange={(e) => {
              const age = e.target.value
              if (age === "" || /^[0-9\b]+$/.test(age)) {
                ageHandler(Number(age))
              }
            }}
          />
          <input
            type="submit"
            value="sprawdź"
            onClick={async () => {
              const data: any = await calculateSaturdayMutation({ ageraw: age })
              if (data.error) {
                setSaturdays("to nie ma sensu")
              } else {
                setPercentage(data.percentageCompleted)
                setSaturdays(data.text)
              }
            }}
          />
          <div className="result">{saturdays && <div>{saturdays}</div>}</div>

          <ProgressBar
            baseBgColor={percentage == "" ? "transparent" : "#e0e0de"}
            completed={percentage}
            width={"90vw"}
            margin={"10"}
            className="progressbar"
          />
        </div>
        <div className="black">
          <h3>pamięć o tobie</h3>

          <input
            type="number"
            value={age}
            placeholder="twój wiek 1-100"
            onChange={(e) => {
              const age = e.target.value
              if (age === "" || /^[0-9\b]+$/.test(age)) {
                ageHandler(Number(age))
              }
            }}
          />
          <input
            type="number"
            value={years}
            placeholder="liczba lat 1-1000"
            onChange={(e) => {
              const years = e.target.value
              if (years === "" || /^[0-9\b]+$/.test(years)) {
                setYears(years)
              }
            }}
          />
          <input
            type="submit"
            value="sprawdź"
            onClick={async () => {
              const data: any = await calculateRememberMutation({ yearsraw: years, ageraw: age })
              if (data.error === 500) {
                setRemember("to nie ma sensu")
              } else {
                setRemember(data)
              }
            }}
          />

          <div className="result">{remember && <span>{remember}</span>}</div>
        </div>
      </div>
    </>
  )
}

export default Main
