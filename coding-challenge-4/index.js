function calculateValidationNumber(input) {

  const parsedInput = Number(input)

  if (isNaN(parsedInput)) {
    throw new Error('You are not allowed to do that!')
  }

  const parsedString = String(parsedInput)
  const parsedLength = parsedString.length

  if (parsedLength > 1) {

    const sum = parsedString.split('').reduce((a, b) => a + Number(b), 0)

    return calculateValidationNumber(sum)
  }

  return parsedInput
}

console.log(calculateValidationNumber(444444))
