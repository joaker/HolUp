export const formatCurrency = (value) => {
    if(!value) return value

    const digits = value.replace(/[^0-9]/g, '')

    const dollars = Number(digits.slice(0, -2) ?? '0')
    const cents = ('00' + (digits.slice(-2) ?? '0')).slice(-2)

    const rawCurrency = Number(`${dollars}.${cents}`)

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    const currency = formatter.format(rawCurrency)
      

    // console.log({digits, dollars, cents, currency})

    return currency
}