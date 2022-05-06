import Dashboard from '@/views/Dashboard';

import Tasks from '@/views/Task/Tasks';
import NewTask from '@/views/Task/NewTask';

import Clients from '@/views/Client/Clients';
import EditClient from '@/views/Client/EditClient';

import RemoteMachines from '@/views/RemoteMachine/RemoteMachines';
import EditRemoteMachine from '@/views/RemoteMachine/EditRemoteMachine';
import NewRemoteMachine from '@/views/RemoteMachine/NewRemoteMachine';

import Databases from '@/views/Database/Databases';
import EditDatabase from '@/views/Database/EditDatabase';
import NewDatabase from '@/views/Database/NewDatabase';

import Support from '@/views/Support';
import Logs from '@/views/Logs';
import Settings from '@/views/Settings';

export const routes = [
	{path: '', component: Dashboard, name: 'Dashboard'},

	{path: '/tasks', component: Tasks, name: 'Tasks'},
	{path: '/new-task', component: NewTask, name: 'NewTask'},

	{path: '/clients', component: Clients, name: 'Clients'},
	{path: '/edit-client/:id', component: EditClient, name: 'EditClient'},

	{path: '/remote-machines', component: RemoteMachines, name: 'RemoteMachines'},
	{path: '/edit-remote-machine/:id', component: EditRemoteMachine, name: 'EditRemoteMachines'},
	{path: '/new-remote-machine', component: NewRemoteMachine, name: 'NewRemoteMachines'},

	{path: '/databases', component: Databases, name: 'Databases'},
	{path: '/edit-database/:id', component: EditDatabase, name: 'EditDatabase'},
	{path: '/new-database', component: NewDatabase, name: 'NewDatabase'},

	{path: '/support', component: Support, name: 'Support'},
	{path: '/logs', component: Logs, name: 'Logs'},
	{path: '/settings', component: Settings, name: 'Settings'},
];
