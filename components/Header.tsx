import { Badge } from "@/components/tailgrids/core/badge";


export default function Header() {
    return (
        // header container
        <div className= 'mt-4 text-center'>
            {/* code */}
            <div className='flex justify-center gap-4'>
                <Badge className='text-3xl rounded-lg py-1 px-3 bg-red-500 text-gray-200 rotate-10'>C</Badge>
                <Badge className='text-3xl rounded-lg py-1 px-3 bg-green-500 text-gray-200 -rotate-20'>S</Badge>
                <Badge className='text-3xl rounded-lg py-1 px-3 bg-blue-500 text-gray-200 rotate-10'>I</Badge>
                <Badge className='text-3xl rounded-lg py-1 px-3 bg-sky-500 text-gray-200 -rotate-10'>2</Badge>
                <Badge className='text-3xl rounded-lg py-1 px-3 bg-yellow-500 text-gray-200 rotate-10'>0</Badge>
                <Badge className='text-3xl rounded-lg py-1 px-3 bg-gray-500 text-gray-200 -rotate-10'>5</Badge>
                
            </div>
            {/* nane */}
            <div>
                <Badge size='lg' className="mt-3">FRONT END SOFTWARE DEVELOPMENT</Badge>
            </div>

        </div>
    )
}