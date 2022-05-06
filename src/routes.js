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

import Logs from '@/views/Log/Logs';
import LiveStream from '@/views/Log/LiveStream';

import Support from '@/views/Support';

import Settings from '@/views/Settings';

export const routes = [
	{path: '', component: Dashboard, name: 'Dashboard'},

	{path: '/tasks', component: Tasks, name: 'Tasks'},
	{path: '/new-task', component: NewTask, name: 'NewTask'},

	{path: '/clients', component: Clients, name: 'Clients'},
	{path: '/edit-client/:id', component: EditClient, name: 'EditClient'},

	{path: '/remote-machines', component: RemoteMachines, name: 'RemoteMachines'},
	{path: '/edit-remote-machine/:id', component: EditRemoteMachine, name: 'EditRemoteMachine'},
	{path: '/new-remote-machine', component: NewRemoteMachine, name: 'NewRemoteMachine'},

	{path: '/databases', component: Databases, name: 'Databases'},
	{path: '/edit-database/:id', component: EditDatabase, name: 'EditDatabase'},
	{path: '/new-database', component: NewDatabase, name: 'NewDatabase'},

	{path: '/logs', component: Logs, name: 'Logs'},
	{path: '/live-stream', component: LiveStream, name: 'LiveStream'},

	{path: '/support', component: Support, name: 'Support'},
	{path: '/settings', component: Settings, name: 'Settings'},
];
