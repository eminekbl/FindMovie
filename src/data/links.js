import Search from '../components/search/Search'
import Home from '../components/Home'
import Contact from '../components/Contact'
import About from '../components/About'
import Category from '../components/Category'
import Details from '../components/search/Details'
import NotFound from '../components/NotFound'

const links = [
    { link: '/', title: 'Home', component: Home, isExact: true, islink: true },
    { link: '/About', title: 'About', component: About, isExact: false, islink: true },
    { link: '/Contact', title: 'Contact', component: Contact, isExact: false, islink: true },
    { link: '/Search/:query', title: 'Search', component: Search, isExact: true, islink: false },
    { link: '/Category/:query/:id', title: 'Popular', component: Category, isExact: true, islink: false },
    { link: '/Details/:query', title: 'Details', component: Details, isExact: true, islink: false },
    { link: '/404', title: 'NotFound', component: NotFound, isExact: false, islink: false }
]

export default links