import Router, { Route, route } from 'preact-router'

import Feat from './feat1.page'
import { Home } from './home.page'
import DefaultLayout from './layout/default'
import { JSXInternal } from 'preact/src/jsx'
import { Login } from './login.page'
import { Begin } from './begin.page'
import { Roadmap } from './roadmap/index.page'
import { RoadmapDetail } from './roadmap/detail.page'
import { RoadmapSlide } from './roadmap/slide.page'
import { QuizSlide } from './roadmap/quiz.page'
type RouteType = {
	component: (...args: any[]) => JSXInternal.Element
	path: string
	name: string
}
export const routes: RouteType[] = [
	// {
	// 	component: Home,
	// 	name: 'Home',
	// 	path: '/',
	// },
	{
		component: Feat,
		name: 'Feat',
		path: 'feat1',
	},
	{
		component: Login,
		name: 'Login',
		path: 'login',
	},
	{
		component: Begin,
		name: 'Begin',
		path: 'begin',
		default: true,
	},
	{
		component: Roadmap,
		name: 'Roadmap',
		path: '/',
	},
	{
		component: RoadmapDetail,
		name: 'Roadmap',
		path: 'roadmap/:id',
	},
	{
		component: RoadmapSlide,
		name: 'Roadmap',
		path: 'roadmap/:id/:topicId/slide',
	},
	{
		component: QuizSlide,
		name: 'Roadmap',
		path: 'roadmap/:id/:topicId/quiz',
	},
]

export const Routes = () => {
	return (
		<DefaultLayout>
			<Router>
				{routes.map(route => (
					<Route
						component={route.component}
						path={route.path}
						default={route.default}
					/>
				))}
			</Router>
		</DefaultLayout>
	)
}
