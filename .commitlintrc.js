module.exports = {
  extends: ['./node_modules/commitlint-config-gitmoji', 'cz'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'chore',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'anno',
        'update',
        'init',
        'WIP',
        'mv'
      ]
    ],
    'type-case': [0],
    'type-empty': [
      2,
      'never',
      [
        ':art:',
        ':newspaper:',
        ':pencil:',
        ':memo:',
        ':zap:',
        ':fire:',
        ':books:',
        ':bug:',
        ':ambulance:',
        ':penguin:',
        ':apple:',
        ':checkered_flag:',
        ':robot:',
        ':green_ale:',
        ':tractor:',
        ':recycle:',
        ':white_check_mark:',
        ':microscope:',
        ':green_heart:',
        ':lock:',
        ':arrow_up:',
        ':arrow_down:',
        ':fast_forward:',
        ':rewind:',
        ':rotating_light:',
        ':lipstick:',
        ':wheelchair:',
        ':globe_with_meridians:',
        ':construction:',
        ':gem:',
        ':bookmark:',
        ':tada:',
        ':loud_sound:',
        ':mute:',
        ':sparkles:',
        ':speech_balloon:',
        ':bulb:',
        ':construction_worker:',
        ':chart_with_upwards_trend:',
        ':ribbon:',
        ':rocket:',
        ':heavy_minus_sign:',
        ':heavy_plus_sign:',
        ':wrench:',
        ':hankey:',
        ':leaves:',
        ':bank:',
        ':whale:',
        ':twisted_rightwards_arrows:',
        ':pushpin:',
        ':busts_in_silhouette:',
        ':children_crossing:',
        ':iphone:',
        ':clown_face:',
        ':ok_hand:',
        ':boom:',
        ':bento:',
        ':pencil2:',
        ':package:',
        ':alien:',
        ':truck:',
        ':age_facing_up:',
        ':busts_in_silhouette:',
        ':card_file_box:',
        ':loud-sound:',
        ':mute:',
        ':egg:',
        ':see-no-evil:',
        ':camera-flash:',
        ':alembic:',
        ':mag:',
        ':wheel-of-dharma:',
        ':label:'
      ]
    ],
    'subject-empty': [2, 'never']
  }
}
