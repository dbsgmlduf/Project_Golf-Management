export const customers = [
    {
        'id': 1,
        'name': '홍길동',
        'studyDate': '21-09-01',
        'nextDate': '21-10-14',
        'topic': '실생활에서 사용할 수 있는 기술'
    }
    ,
    {
        'id': 2,
        'name': '나영희',
        'studyDate': '21-09-02',
        'nextDate': '21-10-13',
        'topic': '실생활에서 사용할 수 있는 기술'
    }
    ,
    {
        'id': 3,
        'name': '김철수',
        'studyDate': '21-09-03',
        'nextDate': '21-10-12',
        'topic': '실생활에서 사용할 수 있는 기술'
    }
    ,
]

export const getPostByNo = id => {
    const array = customers.filter(x => x.id == id);
    if (array.length == 1) {
      return array[0];
    }
    return null;
  }


