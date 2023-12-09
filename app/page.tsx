import Image from 'next/image'
import Stepper from './Stepper'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
     <section>
      <h1>EGANOW MULTI STEPPER FORM</h1>
      <Stepper />
     </section>
    </main>
  )
}
