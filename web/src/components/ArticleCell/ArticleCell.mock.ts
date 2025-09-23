// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
        article: {
                __typename: 'Article' as const,
                id: 42,
                title: 'First Post',
                body: `Look, let's start with some tough love, alright? Ready for this? Here it goes: you two suck at peddling meth. Period. Good! 'Oh boo-hoo, I won't cook meth anymore!' You're a crybaby! Who needs you?! Hey, I'm unplugging the website, so no more money laundering! How do you like that?!`,
                createdAt: '2025-01-01T12:34:56Z',

        },
})
