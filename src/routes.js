import Dashboard from '@/views/Dashboard';
import Tasks from '@/views/Tasks';
import Clients from '@/views/Clients';
import RemoteMachines from '@/views/RemoteMachines';
import Databases from '@/views/Databases';
import Support from '@/views/Support';
import Logs from '@/views/Logs';
import Settings from '@/views/Settings';

export const routes = [
	{path: '', component: Dashboard, name: 'Dashboard'},
	{path: '/tasks', component: Tasks, name: 'Tasks'},
	{path: '/clients', component: Clients, name: 'Clients'},
	{path: '/remote-machines', component: RemoteMachines, name: 'RemoteMachines'},
	{path: '/databases', component: Databases, name: 'Databases'},
	{path: '/support', component: Support, name: 'Support'},
	{path: '/logs', component: Logs, name: 'Logs'},
	{path: '/settings', component: Settings, name: 'Settings'},
];
