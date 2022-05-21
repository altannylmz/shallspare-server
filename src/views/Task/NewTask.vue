<template>
  <div class="add-task-page content position-absolute start-0 end-0 px-4">
    <form @submit.prevent="addTask($event)" class="bg-white shadow-sm p-4">
      <p class="text-start title">
        New Task
      </p>
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="task.name" type="text" class="form-control" id="name">
      </div>
      <div class="form-group">
        <label for="task-types">Type</label>
        <select v-model="task.type" class="form-control" id="task-types" name="taskTypes" @change="changeTaskType($event)">
          <option value="null" disabled="" selected=""  id="tasks_choose_task_type">Görev Tipi Şeç</option>
          <option value="0" id="tasks_client_to_ftp">Client'den FTP'ye</option>
          <option value="1" id="tasks_client_to_disk">Client'den Diske</option>
          <option value="2" id="tasks_mysql_dump_to_ftp">Mysql Dump FTP'ye</option>
          <option value="3" id="tasks_mysql_dump_to_disk">Mysql Dump Disk'e</option>
          <option value="4" id="tasks_ftp_to_ftp">FTP'den FTP'ye</option>
          <option value="5" id="tasks_ftp_to_disk">FTP'den Disk'e</option>
          <option value="6" id="tasks_server_to_disk">Server'dan Disk'e</option>
          <option value="7" id="tasks_server_to_ftp">Server'dan FTP'ye</option>
        </select>
      </div>
      <clientToFtp v-if="taskType===0"/>
      <ClientToDisk v-else-if="taskType===1"/>
      <MysqlDumpToFtp v-else-if="taskType===2"/>
      <MysqlDumpToDisk v-else-if="taskType===3"/>
      <FtpToFtp v-else-if="taskType===4"/>
      <FtpToDisk v-else-if="taskType===5"/>
      <ServerToDisk v-else-if="taskType===6"/>
      <ServerToFtp v-else-if="taskType===7"/>
      <div class="form-group">
        <label for="limit">Limit</label>
        <input v-model="task.limit" type="number" class="form-control" id="limit">
      </div>
      <div class="form-group">
        <label for="schedule">Timing Type</label>
        <select  class="form-control" id="schedule" @change="task.schedule = $event.target.value">
          <option value="minute">Minute</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <TimingMinute v-if="task.schedule==='minute'"/>
      <TimingDaily v-else-if="task.schedule==='daily'"/>
      <TimingWeekly v-else-if="task.schedule==='weekly'"/>
      <TimingMonthly v-else-if="task.schedule==='monthly'"/>
      <button type="submit" class="container-fluid text-center">Add</button>
    </form>
    <div class="text-center p-2 m-3">
      <DirectoryModel/>
    </div>
  </div>
</template>

<script>
import ClientToDisk from '@/components/Task/AddTask/ClientToDisk';
import clientToFtp from '@/components/Task/AddTask/ClientToFtp';
import FtpToDisk from '@/components/Task/AddTask/FtpToDisk';
import FtpToFtp from '@/components/Task/AddTask/FtpToFtp';
import MysqlDumpToDisk from '@/components/Task/AddTask/MysqlDumpToDisk';
import MysqlDumpToFtp from '@/components/Task/AddTask/MysqlDumpToFtp';
import ServerToDisk from '@/components/Task/AddTask/ServerToDisk';
import ServerToFtp from '@/components/Task/AddTask/ServerToFtp';

import TimingMinute from '@/components/Task/AddTask/timing/minute';
import TimingDaily from '@/components/Task/AddTask/timing/daily';
import TimingWeekly from '@/components/Task/AddTask/timing/weekly';
import TimingMonthly from '@/components/Task/AddTask/timing/monthly';

import DirectoryModel from '@/components/Task/AddTask/DirectoryModel';
export default {
	name: 'AddTask',
	components: {
		ClientToDisk,
		clientToFtp,
		FtpToDisk,
		FtpToFtp,
		MysqlDumpToDisk,
		MysqlDumpToFtp,
		ServerToDisk,
		ServerToFtp,
		TimingMinute,
		TimingDaily,
		TimingWeekly,
		TimingMonthly,
		DirectoryModel,
	},
	data() {
		return {
			taskType: null,
			task: {
				type: '',
				name: '',
				schedule: 'minute',
				limit: '',
			},
			shecdule: {
				minute: '',
				hour: '',
				dayOfWeek: '',
				dayOfMonth: '',
			},
			clientToDisk: {
				client: '',
				paths: [],
				targetPath: '',
			},
			directoryModelShow: false,
			activePaths: null,
		};
	},
	methods: {
		changeTaskType($event) {
			this.taskType = Number($event.target.value);
		},
		addTask() {
			if (this.task.type === '' || this.task.name === '' || this.task.limit === ''
          || (Number(this.task.type) === 1
              && (this.clientToDisk.client === ''
                  || this.clientToDisk.paths.length === 0
                  || this.clientToDisk.targetPath === ''
              ))
          || (this.task.schedule === 'minute' && this.shecdule.minute === '')
          || (this.task.schedule === 'daily' && this.shecdule.hour === '')
          || (this.task.schedule === 'weekly' && (this.shecdule.hour === '' || this.shecdule.dayOfWeek === ''))
          || (this.task.schedule === 'monthly' && (this.shecdule.hour === '' || this.shecdule.dayOfMonth === ''))) {
				this.$notify.warning('Please fill empty area');
			} else {
				switch (Number(this.task.type)) {
					case 0:
						break;
					case 1:
						break;
					case 2:
						break;
					case 3:
						break;
					case 4:
						break;
					case 5:
						break;
					case 6:
						break;
					case 7:
						break;
					default:
						this.$notify.warning('Please, select task type');
				}

				console.log('test');
			}
		},
	},
};
</script>

<style scoped>

</style>
