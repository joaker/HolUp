export const DEFAULT_RECIPIENT_COUNT = 30

const firstNames = [
    "Emma", "Liam", "Olivia", "Noah", "Ava", "William", "Sophia", "James", "Isabella", "Oliver",
    "Charlotte", "Benjamin", "Amelia", "Elijah", "Mia", "Lucas", "Harper", "Mason", "Evelyn", "Logan",
    "Abigail", "Alexander", "Emily", "Ethan", "Elizabeth", "Jacob", "Mila", "Michael", "Ella"
]

const lastNames = [
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
    "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
    "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson"
]

const domains = [
    "gmail.com",
    "hotmail.com",
    "outlook.com",
    "yahoo.com",
]

const getDomain = () => {
    const domainIndex = Math.floor(Math.random() * domains.length)
    return domains[domainIndex]
}

const generateName = () => {
    const firstIndex = Math.floor(Math.random() * firstNames.length)
    const lastIndex = Math.floor(Math.random() * lastNames.length)

    const firstName = firstNames[firstIndex]
    const lastName = firstNames[lastIndex]

    return {
        firstName,
        lastName,
    }
}

const generateEmail = (firstName, lastName, domain) => {

    const suffix = Math.random() < 0.5 ? '' : `${Math.floor(Math.random() * 10000)}`

    return `${firstName}.${lastName}${suffix}@${domain}`
}

const generatePhoneNumber = () => {
    const digits =  Math.random().toString().slice(2,12);

    const first = digits.substring(0, 3)
    const second = digits.substring(3, 6)
    const third = digits.substring(6)

    const number = `${first}-${second}-${third}`

    return number
}

const generateContact = (firstName, lastName, domain) => {
    if(Math.random() < 0.5) {
        return generateEmail(firstName, lastName, domain)
    }
    return generatePhoneNumber()
}

export const USUAL_SUSPECTS = [
    {
        firstName: 'John',
        lastName: 'Oakley'
    },
    {
        firstName: 'Marcus',
        lastName: 'Kim'
    },
    {
        firstName: 'Tim',
        lastName: 'Timmerson',
        detail: 'sb-447rr330240878@personal.example.com',
    }
].map(({firstName, lastName, detail }, index) => {
    return {
        id: index,
        firstName,
        lastName,
        name: `${firstName} ${lastName}`,
        detail: detail ?? generateContact(firstName, lastName, getDomain()),
    }
})

export const generateMockRecipients = (count = DEFAULT_RECIPIENT_COUNT) => {

    // console.log(`generating ${count} recipients...`)

    const recipients = USUAL_SUSPECTS.slice()
    for(let i = USUAL_SUSPECTS.length; i < count; i++) {

        // console.log(`generating the ${i} recipient...`)

        const fullName = generateName()
        // console.log({fullName})

        const {firstName, lastName} = fullName

        const id = String(i)

        const domain = getDomain()

        const detail = generateContact(firstName, lastName, domain)

        // console.log({ id, firstName, lastName, domain })

        recipients.push({
            id,
            firstName,
            lastName,
            name: `${firstName} ${lastName}`,
            detail,
        })
    };

    recipients.sort((a, b) => {
        return a.name.localeCompare(b.name)
    })

    return recipients
};

