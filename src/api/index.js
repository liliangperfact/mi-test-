import Ajax from '@/ajax/Ajax'

export const reqCategoryList = () => Ajax({
  url:'/product/getBaseCategoryList',
  methods:'GET'

})