import { resolver } from "blitz"

export default resolver.pipe(async ({ yearsraw, ageraw }) => {
  let years: number = Number(yearsraw)
  let age: number = Number(ageraw)

  if (years <= 0 || years > 1000) {
    return { error: 500 }
  }
  if (age <= 0 || age > 100) {
    return { error: 500 }
  }

  let nowYear = new Date().getFullYear()
  let predictionYear = nowYear + years
  let predictionAge = age + years

  let firstTense: string = ""
  let secondTense: string = ""
  let thirdTense: string = ""
  let yearsPostDeath: number = 0
  let peopleWhoKnowYou: number = 0
  let peopleWhoLoveYouDearly: number = 0
  let peopleWhoKnewYouThatDied: number = 0
  let peopleWhoLovedYouThatDied: number = 0
  let status: string

  if (predictionAge < 77) {
    status = "przy życiu"
  } else {
    status = "martwy"
    yearsPostDeath = predictionAge - 77
    peopleWhoKnewYouThatDied = yearsPostDeath * 10
    peopleWhoLovedYouThatDied = yearsPostDeath * 1
  }

  if (status == "przy życiu") {
    firstTense = "masz"
    secondTense = "znają Cię"
    thirdTense = "kocha"
    peopleWhoKnowYou = predictionAge * 10
    peopleWhoLoveYouDearly = predictionAge * 1
  } else {
    firstTense = "miałbyś wtedy"
    secondTense = "pamięta Cię"
    thirdTense = "kochało"
    peopleWhoKnowYou = 770 - peopleWhoKnewYouThatDied
    peopleWhoLoveYouDearly = 77 - peopleWhoLovedYouThatDied
  }

  if (peopleWhoKnowYou < 0) {
    peopleWhoKnowYou = 0
  }

  if (peopleWhoLoveYouDearly < 0) {
    peopleWhoLoveYouDearly = 0
  }

  return `w roku ${predictionYear} bedziesz ${status}. ${firstTense} ${predictionAge} lat. ${secondTense} ${peopleWhoKnowYou} osób, a ${peopleWhoLoveYouDearly} z nich bardzo Cię ${thirdTense}.`
})
