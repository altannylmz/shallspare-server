import Dashboard from '@/views/Dashboard';

import Tasks from '@/views/Task/Tasks';
import NewTask from '@/views/Task/NewTask';

import Clients from '@/views/Client/Clients';
import EditClient from '@/views/Client/EditClient';

import RemoteMachines from '@/views/RemoteMachines/RemoteMachines';
import EditRemoteMachine from '@/views/RemoteMachines/EditRemoteMachine';
import NewRemoteMachine from '@/views/RemoteMachines/NewRemoteMachine';

import Databases from '@/views/Databases';
import Support from '@/views/Support';
import Logs from '@/views/Logs';
import Settings from '@/views/Settings';

export const routes = [
	{path: '', component: Dashboard, name: 'Dashboard'},

	{path: '/tasks', component: Tasks, name: 'Tasks'},
	{path: '/new-task', component: NewTask, name: 'NewTask'},

	{path: '/clients', component: Clients, name: 'Clients'},
	{path: '/edit-client', component: EditClient, name: 'EditClient'},

	{path: '/remote-machines', component: RemoteMachines, name: 'RemoteMachines'},
	{path: '/edit-remote-machine', component: EditRemoteMachine, name: 'EditRemoteMachines'},
	{path: '/new-remote-machine', component: NewRemoteMachine, name: 'NewRemoteMachines'},

	{path: '/databases', component: Databases, name: 'Databases'},
	{path: '/support', component: Support, name: 'Support'},
	{path: '/logs', component: Logs, name: 'Logs'},
	{path: '/settings', component: Settings, name: 'Settings'},
];
