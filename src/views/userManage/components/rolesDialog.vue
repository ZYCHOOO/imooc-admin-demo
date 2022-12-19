<template>
  <el-dialog
    class="roles-dialog"
    :model-value="modelValue"
    :title="$t('msg.excel.roleDialogTitle')"
    @open="handleOpen"
    @closed="handleClose"
  >
    <el-checkbox-group v-model="currentRoles">
      <el-checkbox v-for="role in roles" :key="role.id" :label="role.title" />
    </el-checkbox-group>
    <template #footer>
      <div class="roles-dialog-footer">
        <el-button @click="handleClose">{{ $t('msg.universal.cancel') }}</el-button>
        <el-button type="primary" @click="onConfirm">{{ $t('msg.universal.confirm') }}</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { getRoles } from '@/api/role'
import { getCurrentRole } from '@/api/userManage'
import { ref, defineProps, defineEmits } from 'vue'

const roles = ref([])
const currentRoles = ref([])

const props = defineProps({
  userId: { type: Number },
  modelValue: { type: Boolean, required: true }
})

const emits = defineEmits(['update:modelValue'])

const handleOpen = async () => {
  const res = await getRoles()
  const roleRes = await getCurrentRole({ id: props.userId })
  roles.value = res.data
  currentRoles.value = [roleRes]
}

const handleClose = () => {
  emits('update:modelValue', false)
}

const onConfirm = () => { }

</script>

<style lang="scss" scoped>
</style>
