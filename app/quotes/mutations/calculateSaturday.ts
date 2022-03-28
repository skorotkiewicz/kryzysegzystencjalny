import { resolver } from "blitz"

export default resolver.pipe(async ({ ageraw }) => {
  // if (!quote) throw new NotFoundError()

  let age: number = Number(ageraw)

  if (age <= 0 || age > 100) {
    return { error: 500 }
  }

  let yearsTilDeath = 77 - age
  let weeksToLive = yearsTilDeath * 52
  let weeksLived = age * 52
  let percentageCompleted = Math.round((age / 77.0) * 100)

  if (age > 77) {
    return { error: 501 }
  } else {
    return {
      text: `przeżyłeś już ~${weeksLived} sobót, pozostało Ci jeszcze ~${weeksToLive} sobót`,
      percentageCompleted,
    }
    // return `you have lived through ~${weeksLived} saturdays\n\n~${weeksToLive} saturdays remain`
  }
})
