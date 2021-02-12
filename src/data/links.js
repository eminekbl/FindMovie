import Search from '../components/search/Search'
// import Details from '../components/search/Details'
import Home from '../components/Home'
import Contact from '../components/Contact'
import About from '../components/About'
import Category from '../components/Category'
import Details from '../components/search/Details'
const links= [
{link:'/', title:'Home', component: Home, isExact:true, islink:true},
{link:'/Contact', title:'Contact', component: Contact, isExact:false, islink:true},
{link:'/Search/:query', title:'Search', component: Search, isExact:true, islink:false},
{link:'/About', title:'About', component: About, isExact:false, islink:true},
{link:'/Category/:query/:id', title:'Popular', component: Category, isExact:true, islink:false},
{link:'/Details/:query', title:'Details', component: Details, isExact:true, islink:false}
]

export default links