import { world, system } from "@minecraft/server";

import { ModalFormData } from "@minecraft/server-ui";


function send(player) {
    system.run(() => {
        var money = world.scoreboard.getObjective("m");
        var string = money.getScore(player)
        var ui = new ModalFormData();
        ui.title("§l[ 계좌 이체 ]");
        ui.dropdown(`§l{ ${String(player.name)} } 플레이어§r\n\n§l[ 잔액 ] : ( ${String(string)} ) 원\n\n[ 플레이어 선택 ]`, world.getAllPlayers().map(p => p.name), 0);
        ui.textField("§l[ 금액 ]", "송금 하실 금액을 적어주세요!", "");
        ui.show(player).then((res) => {
            var amount = Number(res.formValues[1]);
            if (res.canceled == false) {
                if (amount !== NaN) {
                    if (amount > 0) {
                        if (Number.isInteger(amount) == true) {
                            if (string >= amount) {
                            var select = world.getAllPlayers()[res.formValues[0]];
                            var bank = money.getScore(player.scoreboardIdentity) - amount;
                            money.setScore(player.scoreboardIdentity, bank);
                            money.addScore(select.scoreboardIdentity, amount);
                            var time = new Date()
                            player.sendMessage(`§a{ ${time.getFullYear()}년 ${1 + time.getMonth()}월 ${time.getDate()}일 } §b - ${player.name} - 님이 [ ${select.name} ] 님 에게 ( ${amount} ) 원을 송금 했습니다!`);
                            select.sendMessage(`§a{ ${time.getFullYear()}년 ${1 + time.getMonth()}월 ${time.getDate()}일 } §b - ${player.name} - 님이 [ ${select.name} ] 님 에게 ( ${amount} ) 원을 송금 했습니다!`);
                            }
                            else {
                                player.sendMessage("§c[ 잔액이 부족합니다! ]" + " 보유잔액 : ( " + string + "원 )");
                            }
                        }
                        else {
                            player.sendMessage("§c[ 소수점을 입력하지 마세요! ]");
                        }
                    }
                    else {
                        player.sendMessage("§c[ 음수 , 0 보다 크게 금액을 입력해주세요! ]");
                    }
                }
                else {
                    player.sendMessage("§c[ 숫자를 입력 해 주세요! ]");
                }
            }
            else {
                player.sendMessage("§c[ 송금이 취소 되었습니다! ]");
            }
        })
        
    })
}

system.runInterval(() => {
    for (player of world.getPlayers()) {
        if (player.hasTag("!m")) {
            send(player);
            player.removeTag("!m");
        }
    }
},5)

world.beforeEvents.chatSend.subscribe((e) => {
    const msg = e.message
    const sender = e.sender
    e.cancel = true;
        if (!sender.hasTag("prisoner") && !sender.hasTag("k1") && !sender.hasTag("k2") && !sender.hasTag("k2_1") && !sender.hasTag("k3") && !sender.hasTag("k3_1") && !sender.hasTag("k4") && !sender.hasTag("k4_1") && !sender.hasTag("k5")) {
        if (sender.hasTag("j1") && !sender.hasTag("j1_1") && !sender.hasTag("j1_2") && !sender.hasTag("j1_3")) {
            const send = ` [ 초보 나무꾼 ] ${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j1") && sender.hasTag("j1_1") && !sender.hasTag("j1_2") && !sender.hasTag("j1_3")) {
            const send = ` §3[ 중급 나무꾼 ] §r${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j1") && sender.hasTag("j1_1") && sender.hasTag("j1_2") && !sender.hasTag("j1_3")) {
            const send = ` §l§6[ 숙련된 나무꾼 ] §r${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j1") && sender.hasTag("j1_1") && sender.hasTag("j1_2") && sender.hasTag("j1_3")) {
            const send = ` §l§e[ 마스터 나무꾼 ] §r${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j2") && !sender.hasTag("j2_1") && !sender.hasTag("j2_2") && !sender.hasTag("j2_3")) {
            const send = ` [ 초보 광부 ] ${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j2") && sender.hasTag("j2_1") && !sender.hasTag("j2_2") && !sender.hasTag("j2_3")) {
            const send = ` §3[ 중급 광부 ] §r${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j2") && sender.hasTag("j2_1") && sender.hasTag("j2_2") && !sender.hasTag("j2_3")) {
            const send = ` §l§6[ 숙련된 광부 ] §r${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j2") && sender.hasTag("j2_1") && sender.hasTag("j2_2") && sender.hasTag("j2_3")) {
            const send = ` §l§e[ 마스터 광부 ] §r${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j3") && !sender.hasTag("j3_1") && !sender.hasTag("j3_2") && !sender.hasTag("j3_3")) {
            const send = ` [ 초보 농부 ] ${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j3") && sender.hasTag("j3_1") && !sender.hasTag("j3_2") && !sender.hasTag("j3_3")) {
            const send = ` §3[ 중급 농부 ] §r${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j3") && sender.hasTag("j3_1") && sender.hasTag("j3_2") && !sender.hasTag("j3_3")) {
            const send = ` §l§6[ 숙련된 농부 ] §r${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j3") && sender.hasTag("j3_1") && sender.hasTag("j3_2") && sender.hasTag("j3_3")) {
            const send = ` §l§e[ 마스터 농부 ] §r${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j4") && !sender.hasTag("j4_1") && !sender.hasTag("j4_2") && !sender.hasTag("j4_3")) {
            const send = ` [ 초보 어부 ] ${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j4") && sender.hasTag("j4_1") && !sender.hasTag("j4_2") && !sender.hasTag("j4_3")) {
            const send = ` §3[ 중급 어부 ] §r${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j4") && sender.hasTag("j4_1") && sender.hasTag("j4_2") && !sender.hasTag("j4_3")) {
            const send = ` §l§6[ 숙련된 어부 ] §r${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j4") && sender.hasTag("j4_1") && sender.hasTag("j4_2") && sender.hasTag("j4_3")) {
            const send = ` §l§e[ 마스터 어부 ] §r${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j5") && !sender.hasTag("j5_1") && !sender.hasTag("j5_2") && !sender.hasTag("j5_3")) {
            const send = ` [ 초보 헌터 ] ${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j5") && sender.hasTag("j5_1") && !sender.hasTag("j5_2") && !sender.hasTag("j5_3")) {
            const send = ` §3[ 중급 헌터 ] §r${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j5") && sender.hasTag("j5_1") && sender.hasTag("j5_2") && !sender.hasTag("j5_3")) {
            const send = ` §l§6[ 숙련된 헌터 ] §r${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j5") && sender.hasTag("j5_1") && sender.hasTag("j5_2") && sender.hasTag("j5_3")) {
            const send = ` §l§e[ 마스터 헌터 ] §r${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j6") && !sender.hasTag("j6_1") && !sender.hasTag("j6_2") && !sender.hasTag("j6_3")) {
            const send = ` [ 초보 요리사 ] ${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j6") && sender.hasTag("j6_1") && !sender.hasTag("j6_2") && !sender.hasTag("j6_3")) {
            const send = ` §3[ 중급 요리사 ] §r${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j6") && sender.hasTag("j6_1") && sender.hasTag("j6_2") && !sender.hasTag("j6_3")) {
            const send = ` §l§6[ 숙련된 요리사 ] §r${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j6") && sender.hasTag("j6_1") && sender.hasTag("j6_2") && sender.hasTag("j6_3")) {
            const send = ` §l§e[ 마스터 요리사 ] §r${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j7") && !sender.hasTag("j7_1") && !sender.hasTag("j7_2") && !sender.hasTag("j7_3")) {
            const send = ` [ 초보 도축가 ] ${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j7") && sender.hasTag("j7_1") && !sender.hasTag("j7_2") && !sender.hasTag("j7_3")) {
            const send = ` §3[ 중급 도축가 ] §r${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j7") && sender.hasTag("j7_1") && sender.hasTag("j7_2") && !sender.hasTag("j7_3")) {
            const send = ` §l§6[ 숙련된 도축가 ] §r${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j7") && sender.hasTag("j7_1") && sender.hasTag("j7_2") && sender.hasTag("j7_3")) {
            const send = ` §l§e[ 마스터 도축가 ] §r${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j8") && !sender.hasTag("j8_1") && !sender.hasTag("j8_2") && !sender.hasTag("j8_3")) {
            const send = ` [ 초보 탐험가 ] ${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j8") && sender.hasTag("j8_1") && !sender.hasTag("j8_2") && !sender.hasTag("j8_3")) {
            const send = ` §3[ 중급 탐험가 ] §r${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j8") && sender.hasTag("j8_1") && sender.hasTag("j8_2") && !sender.hasTag("j8_3")) {
            const send = ` §l§6[ 숙련된 탐험가 ] §r${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j8") && sender.hasTag("j8_1") && sender.hasTag("j8_2") && sender.hasTag("j8_3")) {
            const send = ` §l§e[ 마스터 탐험가 ] §r${sender.nameTag} > ${msg}`
            world.sendMessage(`${send}`)
        }
        else if (sender.hasTag("j10")) {
            const send = ` §4§l[ 왕 ] §r§e${sender.nameTag} > §r${msg}`
            world.sendMessage(`${send}`)
        }
        else world.sendMessage(` §8[ 무직 ] §r${sender.nameTag} > ${msg}`)
    }
    else if (!sender.hasTag("prisoner") && sender.hasTag("k1")) world.sendMessage(` §l§7[ 공작 ] §r${sender.nameTag} > §r${msg}`)
    else if (!sender.hasTag("prisoner") && sender.hasTag("k2")) world.sendMessage(` §l§9[ 후작 ] §r${sender.nameTag} > §r${msg}`)
    else if (!sender.hasTag("prisoner") && sender.hasTag("k2_1")) world.sendMessage(` §l§a[ 후작 ] §r${sender.nameTag} > §r${msg}`)
    else if (!sender.hasTag("prisoner") && sender.hasTag("k3")) world.sendMessage(` §l§n[ 백작 ] §r${sender.nameTag} > §r${msg}`)
    else if (!sender.hasTag("prisoner") && sender.hasTag("k3_1")) world.sendMessage(` §l§c[ 백작 ] §r${sender.nameTag} > §r${msg}`)
    else if (!sender.hasTag("prisoner") && sender.hasTag("k4")) world.sendMessage(` §l§q[ 자작 ] §r${sender.nameTag} > §r${msg}`)
    else if (!sender.hasTag("prisoner") && sender.hasTag("k4_1")) world.sendMessage(` §l§5[ 자작 ] §r${sender.nameTag} > §r${msg}`)
    else if (!sender.hasTag("prisoner") && sender.hasTag("k5")) world.sendMessage(` §l§b[ 남작 ] §r${sender.nameTag} > §r${msg}`)
    else if (sender.hasTag("prisoner")) world.sendMessage(` §j[ 죄수 ] §r${sender.nameTag} > ${msg}`)
    else world.sendMessage(` §8[ 무직 ] §r${sender.nameTag} > ${msg}`)
})
