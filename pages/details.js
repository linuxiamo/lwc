import Link from 'next/link';

const people = [
    {v: 'car', name: 'bruno'},
    {v: 'bike', name: 'john'},
    {v: 'airplane', name: 'mick'}
]

export default function Details() {
    return (
        <div>
            {people.map(e => (
                <Link as={`/${e.v}/${e.name}`} href="/[vehicle]/[person]">
                    <a>Navigate to the {e.name}' {e.v}</a>
                </Link>
            ))} 
        </div>
    )
}
