import Table from './Table'
import data from './TableData.json'
import getVariation from '../../functions/getVariation'

const { title, variations } = data

export default {
    component: Table,
    title: `Components/${title}`,
}

const Template: React.FC = (args: any) => <Table {...args} />

export const Tables = Template.bind({})
const tables = getVariation('base', variations)
Tables.args = {
    columns: tables.columns,
    rows: tables.rows
}