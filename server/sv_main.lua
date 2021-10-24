RDX = nil

TriggerEvent('rdx:getSharedObject', function(obj) RDX = obj end)

RegisterServerEvent('rdx_skin:createSkin')
AddEventHandler('rdx_skin:createSkin', function(skin, cb)
    local _skin = skin
    local _source = source
    local encode = json.encode(_skin)
    local ukko = RDX.GetPlayerFromId(source)
    local identifier = ukko.getIdentifier()
    TriggerEvent("rdx_db:retrieveSkin", identifier, function(callback)
                if callback then
                    MySQL.Async.execute("UPDATE skins SET `skin`='" .. encode .. "' WHERE `identifier`=@identifier", {["@identifier"] = identifier}, function(done)
                        end)
                    print(identifier)
                    print(ukko)
                else
                    MySQL.Async.execute('INSERT INTO skins (`identifier`, `skin`) VALUES (@identifier, @skin);',
                        {
                            ["@identifier"] = identifier,
                            ["@skin"] = encode
                        }, function(rowsChanged)
                        end)

                end
        end)
end)

RegisterServerEvent('rdx_skin:loadSkin')
AddEventHandler('rdx_skin:loadSkin', function()
    local _source = source
    local ukko = RDX.GetPlayerFromId(source)
    local identifier = ukko.getIdentifier()

        MySQL.Async.fetchAll('SELECT * FROM skins WHERE `identifier`=@identifier;', {["@identifier"] = identifier}, function(skins)
            if next(skins) then
                local skin = skins[1].skin
                local test = json.decode(skin)
                TriggerClientEvent("rdx_skin:applySkin", _source, test)
            end
    end)
end) 

AddEventHandler('rdx_db:retrieveSkin', function(identifier, callback)
    local Callback = callback
    MySQL.Async.fetchAll('SELECT * FROM skins WHERE `identifier`=@identifier;', {["@identifier"] = identifier}, function(skins)
        if skins[1] then
            Callback(skins[1])
        else
            Callback(false)
        end
    end)
end)

RegisterServerEvent("rdx_skin:deleteSkin")
AddEventHandler("rdx_skin:deleteSkin", function(Callback)
    local _source = source
    local id
    for k,v in ipairs(GetPlayerIdentifiers(_source))do
        if string.sub(v, 1, string.len("steam:")) == "steam:" then
            id = v
            break
        end
    end

    local Callback = callback
    MySQL.Async.fetchAll('DELETE FROM skins WHERE `identifier`=@identifier;', {["@identifier"] = id}, function(result)
        if result then
        else
        end
    end)
end)