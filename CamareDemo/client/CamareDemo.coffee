Template.hello.events
  'click button': ->
    MeteorCamera.getPicture {}, (e, r)->
      if e?
        alert(e.message)
      else
        myColl.insert {time: new Date(), 'pic': r}

  'click img.small-image':(e,t)->
    if confirm '确认删除吗？'
      id=e.target.getAttribute 'data_id'
      myColl.remove id

Template.hello.helpers
  pictures: ->
    myColl.find({}, {sort: {time: -1}})
