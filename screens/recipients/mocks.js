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

export const generateMockRecipients = (count = DEFAULT_RECIPIENT_COUNT) => {

    console.log(`generating ${count} recipients...`)

    const recipients = []
    for(let i = 0; i < count; i++) {

        console.log(`generating the ${i} recipient...`)

        const fullName = generateName()
        console.log({fullName})

        const {firstName, lastName} = fullName

        const id = String(i)

        const domain = getDomain()

        const detail = Math.random() < 0.5 ? `${firstName}.${lastName}@${domain}` : `#${Math.floor(Math.random() * 10000)}`

        console.log({ id, firstName, lastName, domain })

        recipients.push({
            id,
            firstName,
            lastName,
            name: `${firstName} ${lastName}`,
            detail,
        })
    };
    return recipients
};

