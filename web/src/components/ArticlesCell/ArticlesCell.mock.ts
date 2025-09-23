// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
        articles: [
                {
                        __typename: 'Articles' as const,
                        id: 42,
                        title: 'First Post',
                        body: `Look, let's start with some tough love, alright? Ready for this? Here it goes: you two suck at peddling meth. Period. Good! 'Oh boo-hoo, I won't cook meth anymore!' You're a crybaby! Who needs you?! Hey, I'm unplugging the website, so no more money laundering! How do you like that?!`,
                        createdAt: '2025-01-01T12:34:56Z',
                },
                {
                        __typename: 'Articles' as const,
                        id: 43,
                        title: 'Second Post',
                        body: `What am I eighth grade hall monitor? Current whereabouts? Let me tell you something, Mike. There are rules to this lawyer thing. Attorney client privilege, that's a big one. That's something I provide for you! If I give up Pinkman, then you're gonna be asking, old Saul gives 'em up pretty easy what's to keep him from giving me up? You see, so then, where's the trust?`,
                        createdAt: '2025-01-01T12:34:56Z',
                },
        ],
})
