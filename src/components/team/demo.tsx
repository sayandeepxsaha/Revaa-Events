import Link from 'next/link'

const members = [
    {
        name: 'Shyam Barua',
        role: 'Founder & CEO',
        avatar: '/team/dj.webp',
        link: '#',
    },
    {
        name: 'Siddharth Singh',
        role: 'Director',
        avatar: '/team/dummy.jpg',
        link: '#',
    },
    {
        name: 'Navneet',
        role: 'Digital Marketing Head',
        avatar: '/team/dummy.jpg',
        link: '#',
    },
    {
        name: 'Shaunak Chalsey',
        role: 'Cinematographer - Content Writer - Video Editor',
        avatar: '/team/sou.webp',
        link: '#',
    },
     {
        name: 'Sayandeep Saha',
        role: 'Tech - Photographer',
        avatar: '/team/say.webp',
        link: '#',
    }
]

export default function TeamSection() {
    return (
        <section className="bg-gray-50 py-16 md:py-1 dark:bg-transparent">
            <div className="mx-auto max-w-5xl s px-6">
               <div className='text-6xl text-center md:text-4xl font-bold text-pink-500 mb-3'>
                <h1>
                    Our Team
                </h1>
               </div>
                <div className="mt-12 md:mt-24">
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {members.map((member, index) => (
                            <div key={index} className="group overflow-hidden">
                                <img className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" src={member.avatar} alt="team member" width="826" height="1239" />
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
                                        <span className="text-xs">_0{index + 1}</span>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.role}</span>
                                        <Link href={member.link} className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
                                            {' '}
                                            LinkedIn
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
};