<template>
  <div class="add-task-page content position-absolute start-0 end-0 px-4">
    <form @submit.prevent="addTask($event)" class="bg-white shadow-sm p-4">
      <p class="text-start">
        Task>Add Task
      </p>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name">
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Type</label>
        <select class="form-control" id="exampleFormControlSelect1" @change="changeTaskType($event)">
          <option value="" disabled="" selected=""  id="tasks_choose_task_type">Görev Tipi Şeç</option>
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
        <input type="number" class="form-control" id="limit">
      </div>
      <div class="form-group">
        <label for="schedule">Timing Type</label>
        <select class="form-control" id="schedule" @change="changeTimingType($event)">
          <option value="minute">Minute</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <TimingMinute v-if="timingType==='minute'"/>
      <TimingDaily v-else-if="timingType==='daily'"/>
      <TimingWeekly v-else-if="timingType==='weekly'"/>
      <TimingMonthly v-else-if="timingType==='monthly'"/>
      <button type="submit" class="container-fluid text-center">Add</button>
    </form>
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
	},
	data() {
		return {
			taskType: null,
			timingType: 'minute',
		};
	},
	methods: {
		changeTaskType($event) {
			this.taskType = Number($event.target.value);
		},
		changeTimingType($event) {
			this.timingType = $event.target.value;
		},
		addTask() {
			this.$notify.success('Task Added.');
		},
	},
};
</script>

<style scoped>

</style>
