const STORAGE_KEY = 'warehouse_console_state_v1'

const today = '2026-05-20'

const defaultState = {
  products: [
    { id: 'p1', name: '3W品牌洗护套装', spec: '500ml+200ml', category: '洗护套装', stock: 120, price: 89, alertLine: 10 },
    { id: 'p2', name: '伊文精品礼盒', spec: '礼盒装', category: '礼品套装', stock: 18, price: 168, alertLine: 20 },
    { id: 'p3', name: '净力除菌洗衣液', spec: '2kg', category: '家清用品', stock: 65, price: 39.6, alertLine: 15 },
    { id: 'p4', name: '金典柔肤水', spec: '500ml', category: '护肤用品', stock: 60, price: 68, alertLine: 12 },
    { id: 'p5', name: '洁柔抽纸 3层 100抽', spec: '100抽/包', category: '纸品', stock: 120, price: 18.5, alertLine: 30 },
    { id: 'p6', name: '护手霜套装礼盒', spec: '礼盒装', category: '护肤用品', stock: 30, price: 89, alertLine: 12 }
  ],
  outboundRecords: [
    { id: 'o1', productId: 'p1', productName: '3W品牌洗护套装', spec: '洗衣液2kg+柔顺剂1L+除菌液500ml', quantity: 6, date: '2026-05-05 15:30', operator: '伊文精品礼盒' },
    { id: 'o2', productId: 'p2', productName: '伊文精品礼盒', spec: '礼盒装（红色）', quantity: 12, date: '2026-05-04 11:22', operator: '渠道运营-张三' },
    { id: 'o3', productId: 'p4', productName: '清风除菌洗手液', spec: '500ml/瓶', quantity: 24, date: '2026-05-03 09:15', operator: '渠道运营-李四' },
    { id: 'o4', productId: 'p5', productName: '原木抽纸', spec: '120抽/包', quantity: 30, date: '2026-05-02 16:45', operator: '仓库管理员' },
    { id: 'o5', productId: 'p6', productName: '护手霜套装礼盒', spec: '深灰色', quantity: 8, date: '2026-05-02 10:21', operator: '仓库管理员' },
    { id: 'o6', productId: 'p3', productName: '净力除菌洗衣液', spec: '2kg', quantity: 18, date: '2026-05-01 14:02', operator: '渠道运营-王五' }
  ],
  inboundRecords: [
    { id: 'i1', productId: 'p1', productName: '3W品牌洗护套装', supplier: '普通渠道商', quantity: 40, price: 125, date: '2026-05-20 09:41:23', remark: '' },
    { id: 'i2', productId: 'p4', productName: '金典柔肤水 500ml', supplier: '3W品牌渠道商', quantity: 60, price: 68, date: '2026-05-19 14:32:08', remark: '' },
    { id: 'i3', productId: 'p5', productName: '洁柔抽纸 3层 100抽', supplier: '台州伊文代理', quantity: 120, price: 18.5, date: '2026-05-19 10:18:55', remark: '' },
    { id: 'i4', productId: 'p6', productName: '护手霜套装礼盒', supplier: '普通渠道商', quantity: 30, price: 89, date: '2026-05-18 16:45:12', remark: '' },
    { id: 'i5', productId: 'p3', productName: '洗衣液 3kg', supplier: '3W品牌渠道商', quantity: 50, price: 45, date: '2026-05-18 09:30:21', remark: '' }
  ],
  returnRecords: [
    { id: 'r1', date: '2026-05-20 14:30', orderNo: 'DD202605200001', logisticsCompany: '顺丰速运', logisticsNo: 'SF1688888888888', productName: '3W品牌洗护套装', spec: '套装（洗发水500ml+沐浴露500ml）', quantity: 3, operator: '张三', remark: '', status: '已入库' },
    { id: 'r2', date: '2026-05-19 10:15', orderNo: 'DD202605190002', logisticsCompany: '中通快递', logisticsNo: 'ZT7896543211234', productName: '移动电源20000mAh', spec: '白色款', quantity: 2, operator: '李四', remark: '', status: '已入库' },
    { id: 'r3', date: '2026-05-18 16:45', orderNo: 'DD202605180003', logisticsCompany: '圆通速递', logisticsNo: 'YT9876543210987', productName: '简约双肩包', spec: '深灰色', quantity: 1, operator: '王五', remark: '', status: '已入库' }
  ],
  channels: [
    { id: 'c1', name: '普通渠道商', type: '普通渠道商', balance: 5600, updatedAt: '2026-05-20 09:41' },
    { id: 'c2', name: '3W 品牌渠道商', type: '3W 品牌渠道商', balance: 12800, updatedAt: '2026-05-20 09:41' },
    { id: 'c3', name: '台州伊文代理', type: '台州伊文渠道商', balance: 9300, updatedAt: '2026-05-20 09:41' },
    { id: 'c4', name: '华东优选商贸', type: '普通渠道商', balance: 3250, updatedAt: '2026-05-20 09:41' },
    { id: 'c5', name: '华南供应链', type: '直营渠道商', balance: 8760, updatedAt: '2026-05-20 09:41' },
    { id: 'c6', name: '西南分销商', type: '普通渠道商', balance: 2180, updatedAt: '2026-05-20 09:41' }
  ]
}

const emptyForms = {
  product: { id: '', name: '', spec: '', category: '', stock: '', price: '', alertLine: '' },
  outbound: { productName: '', spec: '', quantity: '', date: '', operator: '' },
  inbound: { date: today, productId: '', supplier: '', quantity: '', price: '', remark: '' },
  returnRecord: { date: '', orderNo: '', logisticsCompany: '', logisticsNo: '', productName: '', spec: '', quantity: '', operator: '', remark: '' },
  channel: { name: '', type: '', balance: '' }
}

function deepClone(data) {
  return JSON.parse(JSON.stringify(data))
}

function currency(value) {
  return `¥${Number(value || 0).toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

function numberText(value) {
  return Number(value || 0).toLocaleString('zh-CN')
}

function nowText() {
  const date = new Date()
  const pad = n => `${n}`.padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`
}

Page({
  data: {
    tabs: ['仪表盘', '库存数量', '出库记录', '入库记录', '退货入库', '渠道商货款'],
    activeTab: 0,
    periodOptions: ['今日', '本周', '本月', '近7天', '近30天'],
    shortPeriodOptions: ['今日', '本周', '本月'],
    activePeriod: 0,
    customDate: '',
    state: deepClone(defaultState),
    productForm: deepClone(emptyForms.product),
    outboundForm: deepClone(emptyForms.outbound),
    inboundForm: deepClone(emptyForms.inbound),
    returnForm: deepClone(emptyForms.returnRecord),
    channelForm: deepClone(emptyForms.channel),
    channelTypes: ['普通渠道商', '3W 品牌渠道商', '台州伊文渠道商', '直营渠道商', '分销渠道商'],
    logisticsCompanies: ['顺丰速运', '中通快递', '圆通速递', '韵达快递', '京东物流'],
    menuOpen: false,
    showAllChannels: false,
    selectedInboundProductName: '',
    visibleDashboardChannels: [],
    lastUpdated: '2026-05-20 09:41',
    dashboard: {},
    productList: [],
    inboundList: [],
    outboundList: [],
    returnList: [],
    channelList: []
  },

  onLoad() {
    this.loadState()
  },

  loadState() {
    const saved = wx.getStorageSync(STORAGE_KEY)
    const state = saved ? { ...deepClone(defaultState), ...saved } : deepClone(defaultState)
    this.setData({ state }, this.refreshView)
  },

  saveState(state) {
    wx.setStorageSync(STORAGE_KEY, state)
    this.setData({ state, lastUpdated: nowText() }, this.refreshView)
  },

  refreshView() {
    const { products, inboundRecords, outboundRecords, returnRecords, channels } = this.data.state
    const todayOutboundQty = outboundRecords.reduce((sum, item) => sum + Number(item.quantity || 0), 0)
    const todayInboundQty = inboundRecords.reduce((sum, item) => sum + Number(item.quantity || 0), 0)
    const outboundAmount = outboundRecords.reduce((sum, item) => {
      const product = products.find(p => p.id === item.productId) || products.find(p => p.name === item.productName)
      return sum + Number(item.quantity || 0) * Number(product ? product.price : 0)
    }, 0)
    const inboundAmount = inboundRecords.reduce((sum, item) => sum + Number(item.quantity || 0) * Number(item.price || 0), 0)
    const inventoryAmount = products.reduce((sum, item) => sum + Number(item.stock || 0) * Number(item.price || 0), 0)
    const lowStockCount = products.filter(item => Number(item.stock) <= Number(item.alertLine)).length
    const dashboard = {
      cards: [
        { label: '今日出库数量', value: numberText(todayOutboundQty), suffix: '', icon: '↥', trend: '+18.6%', compare: '较昨日', theme: 'red' },
        { label: '今日出库金额', value: currency(outboundAmount), suffix: '', icon: '¥', trend: '+22.3%', compare: '较昨日', theme: 'redSolid' },
        { label: '今日入库数量', value: numberText(todayInboundQty), suffix: '', icon: '↧', trend: '+12.4%', compare: '较昨日', theme: 'orange' },
        { label: '今日入库金额', value: currency(inboundAmount), suffix: '', icon: '¥', trend: '+16.7%', compare: '较昨日', theme: 'orangeSolid' },
        { label: '本月累计出库数量', value: numberText(todayOutboundQty * 18), suffix: '', icon: '↥', trend: '+15.2%', compare: '较上月', theme: 'red' },
        { label: '本月累计出库金额', value: currency(outboundAmount * 18), suffix: '', icon: '¥', trend: '+19.8%', compare: '较上月', theme: 'redSolid' },
        { label: '本月累计入库数量', value: numberText(todayInboundQty * 8), suffix: '', icon: '↧', trend: '+11.3%', compare: '较上月', theme: 'orange' },
        { label: '本月累计入库金额', value: currency(inboundAmount * 8), suffix: '', icon: '¥', trend: '+13.6%', compare: '较上月', theme: 'orangeSolid' }
      ],
      assists: [
        { label: '商品总数', value: numberText(products.length), delta: '+24', icon: '袋', theme: 'red' },
        { label: '库存总金额', value: currency(inventoryAmount), delta: '+8,560.00', icon: '币', theme: 'orange' },
        { label: '低库存预警', value: numberText(lowStockCount), delta: '+3', icon: '铃', theme: 'yellow' }
      ]
    }
    const productList = products.map(item => ({ ...item, totalText: currency(Number(item.stock) * Number(item.price)), priceText: currency(item.price), stockText: numberText(item.stock) }))
    const inboundList = inboundRecords.map(item => ({ ...item, amountText: currency(Number(item.quantity) * Number(item.price)), priceText: currency(item.price) }))
    const outboundList = outboundRecords.map(item => ({ ...item }))
    const returnList = returnRecords.map(item => ({ ...item }))
    const channelList = channels.map(item => ({ ...item, initial: (item.name || '商').slice(0, 1), balanceText: currency(item.balance) }))
    const visibleDashboardChannels = this.data.showAllChannels ? channelList : channelList.slice(0, 3)
    this.setData({ dashboard, productList, inboundList, outboundList, returnList, channelList, visibleDashboardChannels })
  },

  switchTab(e) {
    this.setData({ activeTab: Number(e.currentTarget.dataset.index), menuOpen: false })
  },

  switchPeriod(e) {
    this.setData({ activePeriod: Number(e.currentTarget.dataset.index) })
  },

  toggleMenu() {
    this.setData({ menuOpen: !this.data.menuOpen })
  },

  toggleChannels() {
    this.setData({ showAllChannels: !this.data.showAllChannels }, this.refreshView)
  },

  onFieldInput(e) {
    const { form, field } = e.currentTarget.dataset
    this.setData({ [`${form}.${field}`]: e.detail.value })
  },

  onDateChange(e) {
    const { form, field } = e.currentTarget.dataset
    this.setData({ [`${form}.${field}`]: e.detail.value })
  },

  onProductPicker(e) {
    const product = this.data.state.products[Number(e.detail.value)]
    if (product) {
      this.setData({
        'inboundForm.productId': product.id,
        'inboundForm.price': `${product.price}`,
        selectedInboundProductName: product.name
      })
    }
  },

  onSupplierPicker(e) {
    const channel = this.data.state.channels[Number(e.detail.value)]
    if (channel) this.setData({ 'inboundForm.supplier': channel.name })
  },

  onChannelTypePicker(e) {
    this.setData({ 'channelForm.type': this.data.channelTypes[Number(e.detail.value)] })
  },

  onLogisticsPicker(e) {
    this.setData({ 'returnForm.logisticsCompany': this.data.logisticsCompanies[Number(e.detail.value)] })
  },

  resetProductForm() {
    this.setData({ productForm: deepClone(emptyForms.product) })
  },

  saveProduct() {
    const form = this.data.productForm
    if (!form.name || !form.spec || !form.category || form.stock === '' || form.price === '' || form.alertLine === '') return this.toast('请完整填写商品信息')
    const state = deepClone(this.data.state)
    const data = { ...form, stock: Number(form.stock), price: Number(form.price), alertLine: Number(form.alertLine) }
    if (form.id) {
      const index = state.products.findIndex(item => item.id === form.id)
      if (index >= 0) state.products[index] = data
    } else {
      state.products.unshift({ ...data, id: `p${Date.now()}` })
    }
    this.saveState(state)
    this.resetProductForm()
    this.toast(form.id ? '商品已更新' : '商品已新增')
  },

  editProduct(e) {
    const product = this.data.state.products.find(item => item.id === e.currentTarget.dataset.id)
    if (product) this.setData({ productForm: { ...product, stock: `${product.stock}`, price: `${product.price}`, alertLine: `${product.alertLine}` } })
  },

  deleteProduct(e) {
    const id = e.currentTarget.dataset.id
    const state = deepClone(this.data.state)
    state.products = state.products.filter(item => item.id !== id)
    this.saveState(state)
    this.toast('商品已删除')
  },

  saveOutbound() {
    const form = this.data.outboundForm
    if (!form.productName || !form.spec || !form.quantity || !form.date) return this.toast('请完整填写出库记录')
    const state = deepClone(this.data.state)
    const product = state.products.find(item => item.name === form.productName || item.spec === form.spec)
    if (product) product.stock = Math.max(0, Number(product.stock) - Number(form.quantity))
    state.outboundRecords.unshift({ ...form, id: `o${Date.now()}`, productId: product ? product.id : '', quantity: Number(form.quantity), operator: form.operator || '仓库管理员' })
    this.saveState(state)
    this.setData({ outboundForm: deepClone(emptyForms.outbound) })
    this.toast('出库记录已登记')
  },

  saveInbound() {
    const form = this.data.inboundForm
    if (!form.date || !form.productId || !form.supplier || !form.quantity || !form.price) return this.toast('请完整填写入库记录')
    const state = deepClone(this.data.state)
    const product = state.products.find(item => item.id === form.productId)
    if (!product) return this.toast('请选择有效商品')
    product.stock = Number(product.stock) + Number(form.quantity)
    product.price = Number(form.price)
    state.inboundRecords.unshift({ id: `i${Date.now()}`, productId: product.id, productName: product.name, supplier: form.supplier, quantity: Number(form.quantity), price: Number(form.price), date: `${form.date} ${nowText().slice(11)}:00`, remark: form.remark })
    this.saveState(state)
    this.setData({ inboundForm: deepClone(emptyForms.inbound), selectedInboundProductName: '' })
    this.toast('入库记录已登记')
  },

  saveReturn() {
    const form = this.data.returnForm
    if (!form.date || !form.orderNo || !form.logisticsCompany || !form.logisticsNo || !form.productName || !form.spec || !form.quantity || !form.operator) return this.toast('请完整填写退货入库记录')
    const state = deepClone(this.data.state)
    state.returnRecords.unshift({ ...form, id: `r${Date.now()}`, quantity: Number(form.quantity), status: '已入库' })
    const product = state.products.find(item => item.name === form.productName)
    if (product) product.stock = Number(product.stock) + Number(form.quantity)
    this.saveState(state)
    this.setData({ returnForm: deepClone(emptyForms.returnRecord) })
    this.toast('退货入库记录已登记')
  },

  saveChannel() {
    const form = this.data.channelForm
    if (!form.name || !form.type || !form.balance) return this.toast('请完整填写渠道商信息')
    const state = deepClone(this.data.state)
    state.channels.unshift({ id: `c${Date.now()}`, name: form.name, type: form.type, balance: Number(form.balance), updatedAt: nowText() })
    this.saveState(state)
    this.setData({ channelForm: deepClone(emptyForms.channel) })
    this.toast('渠道商已新增')
  },

  toast(title) {
    wx.showToast({ title, icon: 'none' })
  }
})
