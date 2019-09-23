<template lang="pug">
  div.about.column-flex.justify-center.align-center
    div.title You are {{ years }} years old
    div.flex
      div.number-row(v-for="index in 10") {{ index }}
    div.calendar
      div.calendarNumberColumn.column-flex
        div.number-column(v-for="index in 10") {{ index * 10 - 10 }}
      div.flex(v-for="row in 10")
        div.month(
          v-for="year in 10"
          :class=`{
            'month--passed': row * 10 - 11 + year <= years,
            'month--future': row * 10 - 11 + year <= lifeLength,
            'month--now': row * 10 - 11 + year === years
          }`
        )
          div.month__content {{ birthYear + (row * 10 - 11 + year) }}
    router-link.small(to="/") change birth date
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Calendar',
  computed: {
    ...mapGetters({
      years: 'years',
      birthYear: 'birthYear',
      lifeLength: 'lifeLength'
    }),
    nowYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style lang="scss" scoped>
@import './../assets/style/variables.scss';

.about {
  height: 100vh;
}
.title {
  font-size: 16px;
  margin-bottom: 5px;
}
.calendar {
  position: relative;
}
.month {
  width: 4vw;
  height: 4vw;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: 3px;
  transition: .3s;
  &__content {
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 10px;
    transition: 0.3s;
    color:rgba(255, 255, 255, 0.2);
  }
  &--future {
    border-color: #fff;
    &:hover {
      .month__content {
        color: #fff;
      }
    }
  }
  &--passed {
    background-color: #fff;
    &:hover {
      .month__content {
        color: $background-color;
      }
    }
  }
  &--now {
    background-color: #868686;
    border-color: #868686;
    .month__content {
      opacity: 1;
      color: $background-color;
    }
  }
  &:hover {
    border-radius: 5px;
    .month__content {
      opacity: 1;
    }
  }
}
.number-row {
  width: 4vw;
  border: 1px solid transparent;
  text-align: center;
  font-size: 10px;
  margin: 0 3px;
}
.number-column {
  height: 4vw;
  border: 1px solid transparent;
  text-align: right;
  font-size: 10px;
  margin: 3px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.calendarNumberColumn {
  position: absolute;
  left: -20px;
}
.small {
  font-size: 12px;
  margin-top: 10px;
}
</style>