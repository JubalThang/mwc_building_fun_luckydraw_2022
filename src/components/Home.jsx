
import { MainPage } from './MainPage'
import Sidebar from './Sidebar'

export const Home = () => {

    return (
        <div className='flex h-screen overflow-hidden'>
            <MainPage />
            <Sidebar />

        </div>
    )
}
