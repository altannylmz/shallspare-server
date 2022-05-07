<template>
  <div class="add-task-page content position-absolute start-0 end-0 px-4">
    <form  class="bg-white shadow-sm p-4">
      <p class="text-start title">
        Edit Task
      </p>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name">
      </div>
      <clientToFtp v-if="task.type === 0"/>
      <ClientToDisk v-else-if="task.type===1"/>
      <MysqlDumpToFtp v-else-if="task.type===2"/>
      <MysqlDumpToDisk v-else-if="task.type===3"/>
      <FtpToFtp v-else-if="task.type===4"/>
      <FtpToDisk v-else-if="task.type===5"/>
      <ServerToDisk v-else-if="task.type===6"/>
      <ServerToFtp v-else-if="task.type===7"/>
      <div class="form-group">
        <label for="limit">Limit</label>
        <input type="number" class="form-control" id="limit">
      </div>
      <div class="form-group">
        <label for="schedule">Timing Type</label>
        <select class="form-control" id="schedule">
          <option value="minute">Minute</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
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

export default {
	name: 'EditTask',
	components: {
		ClientToDisk,
		clientToFtp,
		FtpToDisk,
		FtpToFtp,
		MysqlDumpToDisk,
		MysqlDumpToFtp,
		ServerToDisk,
		ServerToFtp,
	},
	data() {
		return {
			id: this.$route.params.id,
			task: {
				type: 0,
			},
		};
	},
};
</script>

<style scoped>

</style>
